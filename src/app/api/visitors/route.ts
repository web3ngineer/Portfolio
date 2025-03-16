import path from "path";
import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";

// Dynamic imports for compatibility with Next.js Edge API Routes
const csvWriterImport = import("csv-writer");
const fsImport = import("fs");

// The path to the CSV file where visitor data will be stored
const csvFilePath = path.join(process.cwd(), "visitors.csv");

// POST Handler
export async function POST(req: NextRequest) {
  const { createObjectCsvWriter } = await csvWriterImport.then(
    (module) => module
  );
  const csvWriter = createObjectCsvWriter({
    path: csvFilePath,
    header: [
      { id: "ip", title: "IP" },
      { id: "timestamp", title: "Timestamp" },
      { id: "userAgent", title: "User Agent" },
    ],
    append: true,
  });

  const ip = req.headers.get("x-forwarded-for") || "Unknown IP";
  const userAgent = req.headers.get("user-agent") || "Unknown User Agent";

  const visitorData = {
    ip,
    timestamp: new Date().toISOString(),
    userAgent,
  };

  try {
    await csvWriter.writeRecords([visitorData]);
    console.log("Visitor data saved to CSV");
    return NextResponse.json(
      { message: "Visitor data saved", data: visitorData },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error writing to CSV:", error);
    return NextResponse.json(
      { message: "Error saving visitor data" },
      { status: 500 }
    );
  }
}

// GET Handler
export async function GET() {
  const fs = await fsImport.then((module) => module.promises);

  try {
    
    const data = await fs.readFile(csvFilePath, "utf8");
    // console.log("Error", data)
    const lines = data.trim().split("\n");
    const headers = lines[0].split(",");
    const visitors = lines.slice(1).map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {} as Record<string, string>);
    });

    const today = dayjs().startOf("day");
    const lastSevenDays = dayjs().subtract(7, "day");

    const todaysViewers = visitors.filter((visitor) =>
      dayjs(visitor.Timestamp).isAfter(today)
    );
    const lastSevenDaysViewers = visitors.filter((visitor) =>
      dayjs(visitor.Timestamp).isAfter(lastSevenDays)
    );

    const response = {
      totalViewers: { total: visitors.length },
      todaysViewers: {
        total: todaysViewers.length,
        users: todaysViewers.map((visitor) => ({
          ip: visitor.IP,
          time: dayjs(visitor.Timestamp).format("YYYY-MM-DD HH:mm:ss"),
          userAgent: visitor["User Agent"],
        })),
      },
      lastSevenDays: {
        total: lastSevenDaysViewers.length,
        users: lastSevenDaysViewers.map((visitor) => ({
          ip: visitor.IP,
          time: dayjs(visitor.Timestamp).format("YYYY-MM-DD HH:mm:ss"),
          userAgent: visitor["User Agent"],
        })),
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return NextResponse.json(
      { message: "Error reading visitor data" },
      { status: 500 }
    );
  }
}

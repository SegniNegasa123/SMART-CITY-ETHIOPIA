import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding Addis Ababa Smart City System (AASCS)...");

  // 1. Create Demo System Users
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@aascs.gov.et" },
    update: {},
    create: {
      nationalId: "EID-10029384",
      email: "admin@aascs.gov.et",
      phone: "+251911000001",
      nameEn: "Abebe Bekele",
      nameAm: "አበበ በቀለ",
      role: "SUPER_ADMIN",
      subCity: "Arada",
      woreda: "01",
      isVerified: true,
    },
  });

  const citizenUser = await prisma.user.upsert({
    where: { email: "citizen@example.com" },
    update: {},
    create: {
      nationalId: "EID-49201948",
      email: "citizen@example.com",
      phone: "+251922334455",
      nameEn: "Selamawit Tadesse",
      nameAm: "ሰላማዊት ታደሰ",
      role: "CITIZEN",
      subCity: "Bole",
      woreda: "03",
      isVerified: true,
    },
  });

  console.log(`✅ Users seeded: ${adminUser.email}, ${citizenUser.email}`);

  // 2. Seed Flagship Smart City Projects
  const project1 = await prisma.project.upsert({
    where: { slug: "light-rail-iot-telemetry" },
    update: {},
    create: {
      slug: "light-rail-iot-telemetry",
      titleEn: "Addis LRT Autonomous Telemetry & Signaling",
      titleAm: "የአዲስ አበባ ቀላል ባቡር የላቀ የሲግናል እና ቴሌሜትሪ ስርዓት",
      category: "Urban Mobility",
      budgetUSD: "$42,000,000",
      budgetETB: "4.8 Billion ETB",
      progressPercent: 78,
      status: "IN_PROGRESS",
      targetCompletion: "Q4 2026",
      leadAgency: "Addis Ababa City Transport Bureau",
      partnerAgencies: ["World Bank", "Ethiopian Railway Corporation"],
      descriptionEn: "Upgrading all 34km of LRT corridors with 5G IoT sensors, automated train positioning, and real-time passenger arrival screens.",
      descriptionAm: "በሁለቱም የባቡር መስመሮች ላይ 5G ሴንሰሮችን በመግጠም ባቡሮች ያሉበትን ቦታና የደረሱበትን ሰዓት በቀጥታ ለህዝብ ማሳወቅ።",
      milestones: {
        create: [
          { title: "North-South Line IoT Sensor Deployment", completed: true, targetDate: "Jan 2025" },
          { title: "East-West Central Dispatch Integration", completed: true, targetDate: "Jul 2025" },
          { title: "Smart City Command Integration", completed: false, targetDate: "Nov 2026" },
        ],
      },
    },
  });

  console.log(`✅ Project seeded: ${project1.titleEn}`);
  console.log("🎉 Seeding completed successfully.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

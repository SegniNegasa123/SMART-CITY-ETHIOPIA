export type Language = 'en' | 'am';

export type SubCityCode =
  | 'AA-BO'
  | 'AA-KI'
  | 'AA-AR'
  | 'AA-AK'
  | 'AA-YE'
  | 'AA-NL'
  | 'AA-KK'
  | 'AA-GU'
  | 'AA-LI'
  | 'AA-AKK'
  | 'AA-LK';

export interface SubCity {
  id: string;
  code: SubCityCode;
  nameEn: string;
  nameAm: string;
  population: number;
  areaKm2: number;
  hubs: number;
  hospitals: number;
  policeStations: number;
  fireStations: number;
  status: 'Operational' | 'Active Upgrade' | 'Planned';
  descriptionEn: string;
  descriptionAm: string;
  mayorOfficeContact: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export type ServiceCategory =
  | 'CIVIL'
  | 'LAND'
  | 'COMMERCE'
  | 'TRANSPORT'
  | 'ENVIRONMENT';

export interface MunicipalService {
  id: string;
  slug: string;
  titleEn: string;
  titleAm: string;
  category: ServiceCategory;
  descriptionEn: string;
  descriptionAm: string;
  feeETB: number;
  processingDays: number;
  iconName: string;
  requiredDocuments: string[];
  prerequisites: string[];
  popular?: boolean;
}

export interface SmartCityProject {
  id: string;
  slug: string;
  titleEn: string;
  titleAm: string;
  category: string;
  budgetUSD: string;
  budgetETB: string;
  progressPercent: number;
  status: 'In Progress' | 'Completed' | 'Tender Open' | 'Planning';
  targetCompletion: string;
  leadAgency: string;
  partnerAgencies: string[];
  descriptionEn: string;
  descriptionAm: string;
  milestones: {
    title: string;
    completed: boolean;
    date: string;
  }[];
}

export interface CityTelemetryData {
  aqi: {
    value: number;
    status: 'Good' | 'Moderate' | 'Unhealthy for Sensitive' | 'Unhealthy';
    pm25: number;
    trend: 'improving' | 'stable' | 'worsening';
    station: string;
  };
  transit: {
    busesActive: number;
    busFleetTotal: number;
    lightRailActiveTrains: number;
    onTimeRate: number;
    dailyPassengers: number;
  };
  traffic: {
    congestionLevel: number; // 0-100%
    activeIncidents: number;
    averageSpeedKmh: number;
  };
  grid: {
    powerStabilityPercent: number;
    waterDistributionRate: number;
    activeMaintenanceZones: number;
  };
  municipalOperations: {
    activeApplications: number;
    resolvedComplaintsToday: number;
    averageResolutionHours: number;
    citizenSatisfactionRate: number;
  };
}

export interface CitizenApplication {
  id: string;
  referenceNumber: string;
  serviceId: string;
  serviceTitleEn: string;
  serviceTitleAm: string;
  applicantName: string;
  nationalId: string;
  phone: string;
  subCity: string;
  status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'IN_INSPECTION' | 'APPROVED' | 'REJECTED';
  submittedAt: string;
  updatedAt: string;
  estimatedCompletion: string;
  timeline: {
    status: string;
    labelEn: string;
    labelAm: string;
    timestamp: string;
    officer?: string;
    note?: string;
  }[];
}

export interface CitizenComplaint {
  id: string;
  referenceNumber: string;
  category: 'Water Leak' | 'Pothole / Road' | 'Power Outage' | 'Waste / Sanitation' | 'Streetlight';
  title: string;
  description: string;
  subCity: string;
  woreda: string;
  latitude: number;
  longitude: number;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';
  submittedAt: string;
  images: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  titleEn: string;
  titleAm: string;
  summaryEn: string;
  summaryAm: string;
  category: 'Infrastructure' | 'E-Services' | 'Technology' | 'Press Release';
  publishedAt: string;
  readTime: string;
  featured?: boolean;
}

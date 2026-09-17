export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'store' | 'cpu' | 'rocket' | 'globe';
  badge?: string;
  features: string[];
}

export interface LeadData {
  name: string;
  phone: string;
  businessName: string;
  service: string;
  website?: string;
}

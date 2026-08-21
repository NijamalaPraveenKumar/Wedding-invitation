export interface WeddingData {
  groomName: string;
  groomTelugu: string;
  groomParentsTelugu: string;
  brideName: string;
  brideTelugu: string;
  brideParentsTelugu: string;
  weddingDate: string;
  weddingDay: string;
  weddingDateTelugu: string;
  muhurthamTime: string;
  muhurthamTelugu: string;
  lagnaTelugu: string;
  venueName: string;
  venueTelugu: string;
  venueAddress: string;
  venueAddressTelugu: string;
  targetDateTime: string; // ISO format with timezone
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

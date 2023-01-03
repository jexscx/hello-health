export interface Appointment {
  slug: string;
  person: string;
  date: string;
  department: string;
  location: string;
  adres: string;
}

export interface Step {
  title: string;
  status: "inactive" | "active" | "done";
  url: string;
  icon: string;
}

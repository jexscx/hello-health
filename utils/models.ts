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
  status: "inactive" | "todo" | "done";
  url: string;
}

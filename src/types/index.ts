export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  outcome: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  text: string;
};

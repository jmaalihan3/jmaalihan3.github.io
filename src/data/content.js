/**
 * Single source of truth for all portfolio content.
 * Edit this file to update name, links, experience, and projects.
 */
export default {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'I build accessible, reliable software for the web.',
  social: [
    { label: 'GitHub', url: 'https://github.com/yourusername' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { label: 'Email', url: 'mailto:you@example.com' },
  ],
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ],
  about: [
    'Hi there! I\'m a software engineer who enjoys building thoughtful, well-crafted products. I care about clean code, clear communication, and shipping work that holds up over time.',
    'Currently, I focus on full-stack web development — from designing APIs and data models to building responsive interfaces. I like working at the intersection of product and engineering, where good UX meets maintainable architecture.',
    'When I\'m not coding, you can find me reading, exploring new tools, or contributing to open source.',
  ],
  experience: [
    {
      company: 'Example Corp',
      title: 'Senior Software Engineer',
      dates: '2022 — Present',
      description:
        'Lead development of customer-facing web applications used by thousands of users daily. Partner with design and product teams to ship features on schedule while maintaining high code quality and test coverage.',
      tech: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    },
    {
      company: 'Startup Inc',
      title: 'Software Engineer',
      dates: '2019 — 2022',
      description:
        'Built and maintained core platform services including authentication, billing, and analytics pipelines. Mentored junior engineers and established frontend testing practices.',
      tech: ['Python', 'Django', 'Vue.js', 'AWS', 'Docker'],
    },
    {
      company: 'Agency Co',
      title: 'Junior Developer',
      dates: '2017 — 2019',
      description:
        'Delivered client websites and internal tools for a variety of industries. Gained experience across the stack while collaborating closely with designers and stakeholders.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
    },
  ],
  projects: [
    {
      title: 'Task Tracker App',
      description:
        'A full-stack task management app with real-time updates, drag-and-drop boards, and team collaboration features. Built to demonstrate clean API design and responsive UI patterns.',
      url: 'https://github.com/yourusername/task-tracker',
      tech: ['React', 'Express', 'Socket.io', 'MongoDB'],
    },
    {
      title: 'Dev Dashboard',
      description:
        'Personal analytics dashboard that aggregates GitHub activity, CI status, and deployment metrics into a single view. Helps track productivity and project health at a glance.',
      url: 'https://github.com/yourusername/dev-dashboard',
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'GitHub API'],
    },
    {
      title: 'CLI Productivity Tool',
      description:
        'Command-line utility for automating repetitive development workflows — git branch cleanup, dependency audits, and environment setup scripts.',
      url: 'https://github.com/yourusername/dev-cli',
      tech: ['Node.js', 'Commander', 'Chalk'],
    },
  ],
};

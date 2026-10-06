/**
 * Single source of truth for all portfolio content.
 * Edit this file to update name, links, experience, and projects.
 */
export default {
  name: 'Jay Maalihan',
  role: 'Software Engineer',
  tagline:
    'Graduate student researching large language models and building systems for education technology.',
  social: [
    { label: 'GitHub', url: 'https://github.com/jmaalihan3' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jose-maalihan-603758261',
    },
    { label: 'Email', url: 'mailto:j.maalihan@gmail.com' },
  ],
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ],
  about: [
    'Computer science graduate student with research experience in large language models and education technology.',
  ],
  experience: [
    {
      company: 'Georgia Institute of Technology',
      title: 'Graduate Student Tutor',
      dates: 'Jan 2025 — Present',
      description:
        'Tutor students in graduate-level subjects including parallel algorithms, machine learning, and natural language processing. Work remotely with learners on coursework, problem sets, and conceptual understanding.',
      tech: ['Parallel Algorithms', 'Machine Learning', 'Natural Language Processing'],
    },
    {
      company: 'City College of San Francisco',
      title: 'Teaching Assistant',
      dates: 'Jan 2021 — Jun 2024',
      description:
        'Graded assignments and provided detailed feedback for computer science courses. Hosted weekly office hours to help students understand course material and complete programming assignments.',
      tech: ['Computer Science', 'Student Mentoring', 'Office Hours'],
    },
  ],
  projects: [
    {
      title: 'VM vCPU Scheduler & Memory Controller',
      description:
        'Engineered a virtualized CPU scheduler and memory controller to manage resource allocation among concurrent virtual machines. Implemented scheduling and memory-management logic with low-level synchronization and concurrency mechanisms, developing practical experience with virtualization, CPU scheduling, contention, synchronization, resource management, and operating-system architecture.',
      url: 'https://github.com/jmaalihan3',
      tech: ['C', 'Virtualization', 'Concurrency', 'Operating Systems'],
    },
    {
      title: 'Distributed Store',
      description:
        'Developed a distributed online-store service in C++ using gRPC, implementing a thread pool to concurrently process client requests and asynchronous RPC calls to multiple vendor services. Aggregated and returned results across distributed services while managing concurrency, asynchronous execution, and service communication. Gained hands-on experience with distributed-systems architecture, multithreaded programming, asynchronous RPC, C++ concurrency primitives, and building modular systems with CMake.',
      url: 'https://github.com/jmaalihan3',
      tech: ['C++', 'gRPC', 'CMake', 'Multithreading', 'Distributed Systems'],
    },
    {
      title: 'Medical Imaging Neural Network',
      description:
        'Led a research project utilizing generative adversarial networks to augment data for training convolutional neural networks for medical imaging tasks. Using few-shot finetuning methods, demonstrated high classification (97%) test scores for a variety of deep neural networks.',
      url: 'https://github.com/jmaalihan3',
      tech: ['Python', 'GANs', 'CNNs', 'Medical Imaging', 'Deep Learning'],
    },
  ],
};

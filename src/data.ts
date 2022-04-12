export const fullVersionLink = "https://resume.narze.live"
export const sourceLink = "https://github.com/narze/resume"
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"

export const introData = {
  name: "Nattapong Amornbunchornvej",
  nickname: "",
  phone: "+66 83 303 4204",
  email: "nattapong@chochoe.net",
  github: "choestelus ",
  linkedin: "natapong-amornbunchornvej",
  location: "Bangkok, Thailand",
  website: "",
}

export const technologies = [
  {
    section: "Languages:",
    details:
      "Go (strong). Rust, TypeScript, PL/pgSQL (proficient).",
  },
  {
    section: "Tools:",
    details:
      "Git, Terraform, Docker, Kubernetes, Helm, ArgoCD, FluxCD",
  },
  {
    section: "Other:",
    details:
      "AWS, GCP, DigitalOcean, GitLab CI/CD, Buildkite, DroneCI",
  },
]

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: "King Mongkut's Institute of Technology Ladkrabang, TH. 2012-2016 (GPA 3.05)",
  },
]

export const workExperiences = [
  {
    position: "Senior Software Engineer",
    company: "Fourgle Co., Ltd.",
    url: "https://www.fourgle.com/",
    years: ["Dec 2021", "Present"],
    details: [
      "Designed base gRPC project with Rust for company-wide usage",
      "Implemented content metrics aggregation system using gRPC and NATs message queue service",
      "Designed and Implemented CI/CD workflow from ground-up using ArgoCD+Kustomize with ArgoCD Image Updater to match FluxCD+Helm behavior",
    ]
  },
  {
    position: "[Contract] Fullstack Software Engineer",
    company: "Token X - SCB 10X subsidiary",
    url: "https://www.tokenx.finance/",
    years: ["Sep 2021", "Dec 2021"],
    details: [
      "Participated in both frontend (using React) and backend web application development (using node-typescript with nest.js framework.",
      "Designed edge-case database migration and ensure data integrity in system.",
      "Created proof-of-concept for Ethereum-based custodian system on cloud-native environment.",
      "Investigated and solved interop issues between Elixir system component and the rest.",
    ],
  },
  {
    position: "DevOps Engineer",
    company: "Omise Payment",
    url: "https://omise.co/",
    years: ["Jul 2020", "May 2021"],
    details: [
      "Reviewed migration and make use of DB Replica in Rails, Enforce integrity at schema level.",
      "Automated Entire CI/CD using Flux, Helm, Terraform on AWS EKS. Onboarding containerised application with whole pipeline in < 20 minutes.",
      "Reduce and visualised cost usage on CI/CD pipeline with AWS cost tagging and AutoScalingGroup.",
      "Response to incident and alerts during on-call schedule, reduce false-alarm and improve robustness of application to engineering team.",
    ],
  },
  {
    position: "Senior Software Engineer",
    company: "Flipay",
    url: "",
    years: ["Dec 2019", "May 2020"],
    details: [
      "Implemented trade routing services across multiple cryptocurrencies exchanges using Elixir programming language.",
      "Given consultant on blockchain development project as custodian service and smart contract deployment.",
      "Created and maintained CI/CD pipelines with kubernetes on GCP and AWS cloud platform.",
      "Designed architecture on distributed systems, monitoring and tracing performance issues."
    ],
  },
  {
    position: "Software Engineer, Site Reliability Engineer",
    company: "Satang Corporation",
    url: "https://satangcorp.com/",
    years: ["Oct 2017", "Dec 2019"],
    details: [
      "Implemented blockchain transaction watcher for BTC and its forks, ethereum and more, decode, parse, and validate smart contract transfer transaction.",
      "Designed and implemented offline transaction signing system for Omni layer, Ethereum, ERC20 with customized parameters, Manage keys with BIP44 scheme.",
      "Implemented concurrent-safe and fault tolerance microservice on cloud platform. using: Go, Rust, RabbitMQ, PostgreSQL+PL/PgSQL, deployed with Docker and Kubernetes.",
      "Implemented automatic offline transaction signing system using YubiHSM and Rust",
      "Manages and monitors infrastructure and deployment process with Docker on Kubernetes, writing ansible role and miscellaneous automation scripts in shell script and python.",
      "Automated CI/CD process over 60 repositories using Drone CI.",
      "Maintained blockchain node such as bitcoin core and parity ethereum."
    ],
  },
  {
    position: "Part-time Intern",
    company: "Innovative Extremist (INOX)",
    url: "https://www.inox.co.th/",
    years: ["Apr 2016", "Jul 2016"],
    details: [
      "Researched and summarized documentation on deployment and orchestration of Docker container using Rancher/Cattle",
      "Researched and summarized documentation on distributed file system stacks deployment and benchmarking on Ceph (mounted as CephFS) and BeeGFS."
    ],
  },
  {
    position: "Intern",
    company: "Innovative Extremist (INOX)",
    url: "https://www.inox.co.th/",
    years: ["Jun 2015", "Aug 2015"],
    details: [
      "reimplemented REST API from pidgin plugin written in C++ for LINE messaging client using Apache Thrift and Go programming language."
    ],
  },
]

export const projects = [
  {
    name: "Undergraduate Project",
    details:
      "Tiramisu: Software-Defined Data Platform - Honorable Mention Award at Thailand National Software Contest #18 (NECTEC): automatically translate the application requirements to the storage requirements and find appropriate storage that can give performance corresponding to application request on distributed storage system. using: Ceph RBD as backend storage, KVM, QEMU and libvirt for provisioning, Go and SystemTap for probing storage metrics, python for storage controller, django web framework for web application user interface.",
    url: "",
  },
]

export const interests = [
  "Areas : Data-oriented programming, Concurrent system design, lisp-like language families, OPSEC and OSINT",
]

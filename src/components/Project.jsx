import { Col, Container, Row, Card, InputGroup } from "react-bootstrap";
import websiteImage from "../assets/img/website.png";
import { Link } from "react-router-dom";
import managmentImage from "../assets/img/managment.png";
import noteImage from "../assets/img/note.png";
import weatherImage from "../assets/img/weather.png";
import aiDesignImage from "../assets/img/ai-design.png";
import portfolioImage from "../assets/img/portfolio.png";

export default function Project() {
  const projects = [
    {
      id: 1,
      name: "AI-Template-Design",
      description:
        "Modern AI-themed React & Tailwind template showcasing sleek layouts and components",
      image: aiDesignImage,
      website: "https://ai-template-site.vercel.app/",
    },
    {
      id: 2,
      name: "Portfolio",
      description:
        "Clean and responsive personal portfolio highlighting your projects and skills",
      image: portfolioImage,
      website: "https://suhayberomi.netlify.app",
    },
    {
      id: 3,
      name: "Management Project",
      description:
        "A React.js project to add and manage projects and tasks, allowing users to create, delete, and organize both projects and their tasks efficiently",
      image: managmentImage,
      website: "https://project-managment-one.vercel.app",
    },
    {
      id: 4,
      name: "Todo App",
      description:
        "A simple and interactive Todo application using vanilla JavaScript to add, complete, and delete tasks",
      image: noteImage,
      website: "https://note---app.web.app",
    },
    {
      id: 5,
      name: "Weather App",
      description:
        "A lightweight weather application built with JavaScript that fetches and displays real-time weather information",
      image: weatherImage,
      website: "https://appweathere.netlify.app",
    },
  ];

  return (
    <section id="project">
      <div style={{ marginTop: "120px", marginBottom: "50px" }}>
        <Container>
          <Row className="align-items-center">
            <Col xxl="8" xl="8" lg="8" md="12">
              <div className="d-flex align-items-center">
                <h1 className="mb-0 me-3">#projects</h1>
                <div className="border border-primary w-100"></div>
              </div>
            </Col>

            {projects.map(project => (
              <Col
                key={project.id}
                className="mt-5"
                xxl="6"
                xl="6"
                lg="6"
                md="12"
              >
                <Card
                  style={{ width: "19rem" }}
                  className="w-100 border-1 border-light"
                >
                  <Card.Body>
                    <div className="d-flex justify-content-center">
                      <Card.Img
                        src={project.image}
                        className="img-fluid"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <hr />
                    <Card.Title className="fs-2">{project.name}</Card.Title>
                    <hr />
                    <Card.Text className="fs-5">
                      {project.description}
                    </Card.Text>
                    <hr />

                    <InputGroup className="align-items-center">
                      {/* Website Button */}
                      <div className="border rounded-3">
                        <button className="btn d-flex align-items-center px-3">
                          <img
                            width="25px"
                            src={websiteImage}
                            alt="Website"
                            className="me-2"
                          />
                          <Link
                            className="text-decoration-none"
                            to={project.website}
                          >
                            WEBSITE
                          </Link>
                        </button>
                      </div>
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

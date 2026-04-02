import { useState } from "react";
import LessonTable from "./components/LessonTable";
import LessonForm from "./components/LessonForm";
import lessonsData from "./data/data";

function App() {
  const [lessons, setLessons] = useState(lessonsData);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Overview");

  const handleOpenAdd = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveLesson = (lesson) => {
    setLessons((prev) => [...prev, lesson]);
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <div className="brand">LabMap</div>

          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">List</a>
            <a href="#">About</a>
          </nav>
        </div>

        <div className="topbar-right">
          <input
            type="text"
            placeholder="Find a lab..."
            className="search-input"
          />
          <button className="search-btn">Add new</button>
        </div>
      </header>

      <main className="page-container">
        <div className="content-card">
          <div className="layout">
            <div className="sidebar">
              <h2>Menu</h2>
              <nav className="sidebar-nav">
                <a
                  href="#"
                  className={active === "Overview" ? "active" : ""}
                  onClick={() => setActive("Overview")}
                >
                  Overview
                </a>
                <a
                  href="#"
                  className={active === "Open labs" ? "active" : ""}
                  onClick={() => setActive("Open labs")}
                >
                  Open labs
                </a>
                <a
                  href="#"
                  className={active === "Maintainance" ? "active" : ""}
                  onClick={() => setActive("Maintainance")}
                >
                  Maintainance
                </a>
                <a
                  href="#"
                  className={active === "IT contact" ? "active" : ""}
                  onClick={() => setActive("IT contact")}
                >
                  IT contact
                </a>
              </nav>
            </div>

            <div className="main-content">
              <div className="content-top">
                <h1>Computer Labs</h1>
                <button className="add-btn" onClick={handleOpenAdd}>
                  + Add room
                </button>
              </div>

              <LessonTable lessons={lessons} />
            </div>
          </div>
        </div>
      </main>

      <LessonForm
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSave={handleSaveLesson}
      />
    </>
  );
}

export default App;
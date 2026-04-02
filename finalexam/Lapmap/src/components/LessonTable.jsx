import LessonItem from "./LessonItem";

function LessonTable({ lessons }) {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Room name</th>
          <th>Room code</th>
          <th>Computer</th>
          <th>Manager</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {lessons.map((lesson, index) => (
          <LessonItem key={lesson.id} lesson={lesson} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default LessonTable;
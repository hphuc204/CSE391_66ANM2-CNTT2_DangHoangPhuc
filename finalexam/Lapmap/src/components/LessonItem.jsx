function LessonItem({ lesson, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{lesson.Roomname}</td>
      <td>{lesson.Roomcode}</td>
      <td>{lesson.Computers}</td>
      <td>{lesson.Manager}</td>
      <td>{lesson.Email}</td>
    </tr>
  );
}

export default LessonItem;
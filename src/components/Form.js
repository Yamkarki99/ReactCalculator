export const Form = ({ value, handleChange, onSubmitValue }) => {
  return (
    <form onSubmit={onSubmitValue}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
};

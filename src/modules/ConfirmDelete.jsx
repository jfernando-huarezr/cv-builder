export default function ConfirmDelete({ handleData, currentData, closeModal }) {
  const handleClick = (e) => {
    e.preventDefault;
    handleData(currentData);
    closeModal();
  };
  return (
    <>
      <h2>Are you sure you want to delete this?</h2>
      <button onClick={handleClick}>Confirm</button>
    </>
  );
}

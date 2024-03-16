function formatDate(inputDate) {
  const [year, month] = inputDate.split("-");
  const monthIndex = parseInt(month, 10);
  const monthName = new Date(`${year}-${monthIndex}-01`).toLocaleString(
    "default",
    {
      month: "long",
    }
  );
  return `${monthName} ${year}`;
}

const createDataUpdater = (dataState, setDataState) => {
  return (updatedData) => {
    if (updatedData) {
      setDataState(
        dataState.map((dataInfo) =>
          dataInfo.id === updatedData.id
            ? { ...dataInfo, ...updatedData }
            : dataInfo
        )
      );
    }
  };
};

export { formatDate, createDataUpdater };

// este archivo construye la legenda en el mapa de relaciones

const Legend = () => {
  const legendItems = [
    { color: "#18A33A", label: "Habilitado" },
    { color: "#B32D1C", label: "No Disponible" },
  ];
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#fff",
      }}
    >
      <h4>Legend</h4>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {legendItems.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: item.color,
                marginRight: "10px",
                border: "1px solid #000",
              }}
            ></div>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;

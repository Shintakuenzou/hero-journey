export function StatusLabels() {
  const statusLabel = ["Inteligencia", "Combate", "Durabilidade", "Poder", "Velocidade", "Força"];
  return (
    <>
      {statusLabel.map((label, index) => {
        return (
          <p key={index} className="text-slate-300 font-semibold mt-[7.5px]">
            {label}
          </p>
        );
      })}
    </>
  );
}

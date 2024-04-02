export default function CurrentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString("pt-BR");

  return (
    <p>Horário da consulta: <time id="time">{ time }</time></p>
  )
}

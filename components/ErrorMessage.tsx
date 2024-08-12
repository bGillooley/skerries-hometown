export default function ErrorMessage(props: { errors: string[] }) {
  return (
    <div>
      {props.errors.map((err) => (
        <p className="text-sm" key={Math.random()}>
          {err}
        </p>
      ))}
    </div>
  );
}

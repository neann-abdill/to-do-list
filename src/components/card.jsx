import Button from "./button";

function Card({ title, desc, status, onEdit, onDelete }) {
  return (
    <div className="flex flex-col w-full bg-white/10 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-xl transition hover:-translate-y-2">
      <h3 className="text-2xl mb-2 font-semibold">{title}</h3>
      <p className="text-gray-20 leading-7 mb-5">{desc}</p>
      <p className="text-xs mt-2 text-blue-600 font-medium">{status}</p>

      <div className="flex gap-2 mt-2 justify-center">
        <Button className="px-5 py-2 rounded-xl bg-amber-500 font-semibol" variant="warning" onClick={onEdit}>
          Edit
        </Button>
        <Button className="px-5 py-2 rounded-xl bg-red-500 font-semibold" variant="danger" onClick={onDelete}>
          Hapus
        </Button>
      </div>
    </div>
  );
}

export default Card;
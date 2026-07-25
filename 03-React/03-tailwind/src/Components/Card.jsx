export default function Card(props) {
    console.log(props)
    

  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src="https://picsum.photos/400/250"
        alt="Card"
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-bold text-black-900">
          {props.someObj.username}
        </h2>

        <p className="mt-2 text-gray-600">
          Discover breathtaking views and unforgettable adventures in nature.
        </p>

        <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}
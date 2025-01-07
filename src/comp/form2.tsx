import React, { useState } from "react";

type CardOption = {
  id: string;
  title: string;
  description: string;
};

type Form2Props = {
  options: CardOption[];
  onSubmit: (selectedId: string) => void;
};

const Form2: React.FC<Form2Props> = ({ options, onSubmit }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setSelectedId(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedId) {
      onSubmit(selectedId);
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  return (
    <div className="flex flex-col m-10 items-center justify-between ">
      <div className="h-1/2">
        <h2 className="text-xl font-bold">Select a Plan</h2>
      </div>



      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {options.map((option) => (
            <div
              key={option.id}
              className={`p-4 border rounded-lg shadow cursor-pointer transition ${selectedId === option.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
                }`}
              onClick={() => handleCardClick(option.id)}
            >
              <h2 className="text-lg font-bold">{option.title}</h2>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between content-between w-full">
          <button
            type="reset"
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Voltar
          </button>

          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </form>

    </div>
  );
};

export default Form2;


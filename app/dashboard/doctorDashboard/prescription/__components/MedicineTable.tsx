const MedicineTable = ({ medicines }: any) => {
  return (
    <div className="w-full mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-cyan-200 text-[#000]">
            <th className="flex justify-center px-4 py-2 rounded-tl-md">Name Of Medicine</th>
            <th className="px-1 py-2 w-[20%] py-1 text-center">Days</th>
            <th className="px-1 py-2  text-center">Dose</th>
            <th className="px-1 py-2 rounded-tr-md text-center">After/Before Meal</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {medicines?.map((med: any, i: number) => (
            <tr key={i} className="border-b border-gray-200">
              {/* 1. Medicine + Dosage - Editable input, border on focus */}
              <td className="px-1 py-2">
                <input
                  defaultValue={`${med?.medicine} ${med?.dosage}`}
                  className="w-full bg-transparent outline-none border border-transparent focus:border-gray-400 rounded px-1 py-1 text-center"
                />

              </td>

              {/* 2. Duration - Editable input, border on focus */}
              <td className="px-1 py-2">
                <input
                  defaultValue={med?.duration}
                  className="w-full bg-transparent outline-none border border-transparent focus:border-gray-400 rounded px-1 py-1 text-center"
                />
              </td>

              {/* 3. Dose - Select dropdown with hidden border */}
              <td className="px-1 py-2">
                <select
                  defaultValue={med?.schedule}
                  className="w-full bg-transparent outline-none border-none focus:ring-0 appearance-none px-1 text-center"
                >
                  <option value="1+1+1">1+1+1</option>
                  <option value="1+0+1">1+0+1</option>
                  <option value="0+1+1">0+1+1</option>
                  <option value="1+0+0">1+0+0</option>
                </select>
              </td>

              {/* 4. Meal - Select dropdown with hidden border */}
              <td className="px-1 py-2">
                <select
                  defaultValue={med?.meal}
                  className="w-full bg-transparent outline-none border-none focus:ring-0 appearance-none px-1 text-center"
                >
                  <option value="before">Before Meal</option>
                  <option value="after">After Meal</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineTable;

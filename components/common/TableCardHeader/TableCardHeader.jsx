import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CardHeader } from "@/components/ui/card";
const TableCardHeader = ({ title, isSearchable = true }) => {
  return (
    <div>
      <CardHeader className="pt-4 px-4 lg:px-[26px]">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <span className="text-lg lg:text-[22px] font-inter font-bold text-[#455468]">
            {title}
          </span>
          {isSearchable && (
            <div className="relative w-full md:w-[500px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search" className="pl-10 w-full" />
            </div>
          )}
        </div>
      </CardHeader>
    </div>
  );
};

export default TableCardHeader;

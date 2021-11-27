import React from "react";


//interface for customerTable
interface ISupplierTableProps {
  title: string;
}

const Table: React.FC<any> = ({Headers,Columns}) => {

  const Th: React.FC<ISupplierTableProps> = ({ title = "" }) => (
    <th className="py-3 px-6 text-left">{title}</th>
  );


const TdContent = ({content}: any) => (
    <td className="px-4 py-3 text-ms font-semibold border">
          <div className="flex items-center ">
           {content}
          </div>
    </td>
    )

 const Td: React.FC<any> = ({ data }) => (
    // loop the object data
    <>
   
    <tr className="border-b border-gray-200 hover:bg-gray-100 ">
      {Object.keys(data[0]).map((key, index) => (
        <TdContent content={data[0][key]} key={index}/>
      
      ))}
    </tr>

    </>    )

  return (
    <>
    <section className="p-2">
  <div className="overflow">
    <div className="overflow-x-auto rounded-lg shadow-lg ">
      <table className="w-full table-auto mx-auto">
                <thead>
                  <tr className="text-md font-mono font-semibold tracking-wide text-left text-gray-100 bg-indigo-500 uppercase border-b border-gray-600">
                    
          
                    {Headers?.map((item: any, index: number) => (
                        <Th title={item.title} key={index} />
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                   {Columns.map((item: any, index: number) => (
                        <Td data={item} key={index} />
                    ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
    </>
  );
};

export default Table;
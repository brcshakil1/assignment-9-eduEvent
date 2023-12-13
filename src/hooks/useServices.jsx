import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data: services, isPending } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/services");
      const data = res.json();
      return data;
    },
  });
  return [services, isPending];
};

export default useServices;

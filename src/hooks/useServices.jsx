import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data: services, isPending } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch(
        "https://edu-event-server-site.vercel.app/services"
      );
      const data = res.json();
      return data;
    },
  });
  return [services, isPending];
};

export default useServices;

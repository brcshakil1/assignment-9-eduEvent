import { useQuery } from "@tanstack/react-query";

const useService = (id) => {
  const { data: service, isPending: isServicePending } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch(
        `https://edu-event-server-site.vercel.app/services/:${id}`
      );
      const data = res.json();
      return data;
    },
  });
  return [service, isServicePending];
};

export default useService;

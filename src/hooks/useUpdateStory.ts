import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateStory = (id: string | number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });
};
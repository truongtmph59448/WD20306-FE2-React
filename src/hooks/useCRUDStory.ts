import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  const listQuery = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/stories");
      return res.data;
    },
  });

  const addMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: any }) => {
      const res = await axios.put(`http://localhost:3000/stories/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  return {
    list: listQuery.data,
    isLoading: listQuery.isLoading,
    isError: listQuery.isError,
    add: addMutation,
    remove: removeMutation,
    update: updateMutation,
  };
};
// services/api.js
import axios from "axios";
import api from "../api/axios";

export const getChats = async (token) => {
  try {
    const res = await api.get("/chat/chats", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};
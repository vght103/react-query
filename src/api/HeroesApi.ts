import axios, { AxiosResponse } from "axios";

export type RqHeroesType = {
  id: number;
  name: string;
  alterEgo: string;
};

export type RqFriendsType = {
  id: number;
  name: string;
};

export type RqUsersType = {
  id: string;
  channelId: string;
};

export type RqColors = {
  id: number;
  label: string;
};

// hero array
export const fetchHeroes = async (): Promise<AxiosResponse<RqHeroesType[]>> => {
  return await axios.get(`http://localhost:4000/superheroes`);
};

//hero detail

export const fetchHeroeDetail = async (id: string): Promise<AxiosResponse<RqHeroesType>> => {
  return await axios.get(`http://localhost:4000/superheroes/:id`.replace(":id", id));
};

// friends array

export const fetchFriends = async (): Promise<AxiosResponse<RqFriendsType[]>> => {
  return await axios.get(`http://localhost:4000/friends`);
};

export const fetchFriendDetail = async (id: string): Promise<AxiosResponse<RqFriendsType>> => {
  return await axios.get(`http://localhost:4000/friends/:id`.replace(":id", id));
};

// user fetch
export const fetchUserByEmail = (email: string): Promise<AxiosResponse<RqUsersType>> => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

// channel fetch
export const fetchCoursesByChannelId = async (
  channelId: string
): Promise<AxiosResponse<RqUsersType>> => {
  return await axios.get(`http://localhost:4000/channels/${channelId}`);
};

// colors
export const fetchColors = async (): Promise<AxiosResponse<RqColors[]>> => {
  return await axios.get(`http://localhost:4000/colors`);
};

import {createStore} from "vuex";
import axiosClient from "../axios";

const temSurveys = [
  {
    id: 100,
    title: "Ibrahim Youtube Content",
    slug: "Ibrahim Youtube Content",
    status: "draft",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsurvey-concept-shot-survey-written-paper-chit-163484143.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fsurvey-concept-shot-survey-written-paper-chit-image163484143&tbnid=SGROvUFJ0i-UvM&vet=12ahUKEwjI58nI6Oz1AhUFuioKHdc1BFYQMygDegUIARC_AQ..i&docid=lT2fGENggR_JWM&w=1600&h=1155&q=survey%20images&ved=2ahUKEwjI58nI6Oz1AhUFuioKHdc1BFYQMygDegUIARC_AQ",
    description: "Survey description",
    created_at: "2022-2-3",
    updated_at: "2022-2-3",
    expire_date: "2022-2-4",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From Where ?",
        description: "snakdjasd kjasdbkb ljglkt grleglkds fjwhfk wejfewkf ewkf ewkbfwekf wekf ekfbekfwe ",
        data: {
          options: [
            {uuid: "", text: "USA"},
            {uuid: "", text: "EGP"},
          ],
        },
      },
      {
        id: 2,
        type: "checkbox",
        question: "What Language ?",
        description: "asdsafij fiohwuehf ewlfhushofhdsoufh fwfubdskbf iefb wuiebfdsn fwbeufsd knffoubuewf",
        data: {
          options: [
            {uuid: "ds3215sd3-sda153ds", text: "JAVASCRIPT"},
            {uuid: "fds5fsd6-65dsf54s", text: "PHP"},
            {uuid: "65dsf46sf-ds6f46sdf", text: "JAVA"},
            {uuid: "ds4f-46sfd4f-68ds4f6-4sd6f84", text: "C#"},
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "What Language ?",
        description: "asdsafij fiohwuehf ewlfhushofhdsoufh fwfubdskbf iefb wuiebfdsn fwbeufsd knffoubuewf",
        data: {
          options: [
            {uuid: "ds3215sd3-sda153ds", text: "JAVASCRIPT"},
            {uuid: "fds5fsd6-65dsf54s", text: "PHP"},
            {uuid: "65dsf46sf-ds6f46sdf", text: "JAVA"},
            {uuid: "ds4f-46sfd4f-68ds4f6-4sd6f84", text: "C#"},
          ],
        },
      },
      {
        id: 4,
        type: "radio",
        question: "What Language ?",
        description: "asdsafij fiohwuehf ewlfhushofhdsoufh fwfubdskbf iefb wuiebfdsn fwbeufsd knffoubuewf",
        data: {
          options: [
            {uuid: "ds3215sd3-sda153ds", text: "JAVASCRIPT"},
            {uuid: "fds5fsd6-65dsf54s", text: "PHP"},
            {uuid: "65dsf46sf-ds6f46sdf", text: "JAVA"},
            {uuid: "ds4f-46sfd4f-68ds4f6-4sd6f84", text: "C#"},
          ],
        },
      },
      {
        id: 5,
        type: "checkbox",
        question: "What Language ?",
        description: "asdsafij fiohwuehf ewlfhushofhdsoufh fwfubdskbf iefb wuiebfdsn fwbeufsd knffoubuewf",
        data: {
          options: [
            {uuid: "ds3215sd3-sda153ds", text: "JAVASCRIPT"},
            {uuid: "fds5fsd6-65dsf54s", text: "PHP"},
            {uuid: "65dsf46sf-ds6f46sdf", text: "JAVA"},
            {uuid: "ds4f-46sfd4f-68ds4f6-4sd6f84", text: "C#"},
          ],
        },
      },
      {
        id: 6,
        type: "text",
        question: "What is your favorite Language ?",
        description: "asdsafij fiohwuehf ewlfhushofhdsoufh fwfubdskbf iefb wuiebfdsn fwbeufsd knffoubuewf",
        data: {},
      },
      {
        id: 7,
        type: "text",
        question: "What is your favorite Framework ?",
        description: "asdsafij fiohwuehf ewlfhushofhdsoufh fwfubdskbf iefb wuiebfdsn fwbeufsd knffoubuewf",
        data: {},
      },
    ],
  },
  {
    id: 200,
    title: "Ibrahim Youtube Content",
    slug: "Ibrahim Youtube Content",
    status: "draft",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsurvey-concept-shot-survey-written-paper-chit-163484143.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fsurvey-concept-shot-survey-written-paper-chit-image163484143&tbnid=SGROvUFJ0i-UvM&vet=12ahUKEwjI58nI6Oz1AhUFuioKHdc1BFYQMygDegUIARC_AQ..i&docid=lT2fGENggR_JWM&w=1600&h=1155&q=survey%20images&ved=2ahUKEwjI58nI6Oz1AhUFuioKHdc1BFYQMygDegUIARC_AQ",
    description: "Survey description VUE3",
    created_at: "2022-2-4",
    updated_at: "2022-2-4",
    expire_date: "2022-2-5",
    questions: [],
  },
  {
    id: 300,
    title: "Ibrahim Youtube Content",
    slug: "Ibrahim Youtube Content",
    status: "draft",
    image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsurvey-concept-shot-survey-written-paper-chit-163484143.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fsurvey-concept-shot-survey-written-paper-chit-image163484143&tbnid=SGROvUFJ0i-UvM&vet=12ahUKEwjI58nI6Oz1AhUFuioKHdc1BFYQMygDegUIARC_AQ..i&docid=lT2fGENggR_JWM&w=1600&h=1155&q=survey%20images&ved=2ahUKEwjI58nI6Oz1AhUFuioKHdc1BFYQMygDegUIARC_AQ",
    description: "Survey description VUE3",
    created_at: "2022-2-4",
    updated_at: "2022-2-4",
    expire_date: "2022-2-5",
    questions: [],
  },
];


const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...temSurveys],
    questionTypes:["text", "select", "radio", "checkbox", "textarea"],
  },
  getters: {},
  actions: {
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },

    login({commit}, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    logout({commit}) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout')
          return response;
        })
    }
  },

  modules: {},
  mutations: {
    logout: state => {
      state.user.token = null;
      state.user.data = {};
      sessionStorage.removeItem('TOKEN')
    },
    setUser: (state,userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token)
    }
  },

})

export default store;

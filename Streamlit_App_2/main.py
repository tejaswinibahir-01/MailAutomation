import streamlit as st
from streamlit_option_menu import option_menu
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import auth

import login,Homepage,Projects,Report
from _datetime import datetime

st.set_page_config(page_title="Pr-Tracking", page_icon=":pie_chart:", layout="wide")

# cred = credentials.Certificate("project-tracking-9c9b5-bf7842a47960.json")
# firebase_admin.initialize_app(cred)

if not firebase_admin._apps:
    cred = credentials.Certificate("project-tracking-9c9b5-bf7842a47960.json")
    firebase_admin.initialize_app(cred)

class MultiApp:

    def __init__(self):
        self.apps = []

    def add_app(self, title, func):

        self.apps.append({
            "title": title,
            "function": func
        })

    def app():

        app = option_menu(

            menu_title=None,
            options=['Home', 'Projects', 'Report', 'Account'],
            icons=['house-fill', 'book', 'info-circle-fill', 'person-circle'],
            orientation='horizontal',

            default_index=1,
            styles={
                "container": {"position": "top", "background": "#F0F2F6", "width": "100%", "height": "90px"},
                "icon": {"font-size": "18px", },
                "nav-link": {"color": "black", "font-size": "15px", "text-align": "center", "margin": "20px",
                             },
                "nav-link-selected": {"width": "70%", "color": "white"},

            }
            # "--hover-color": "blue","nav-link-selected": {"background-color": "#02ab21"}
        )



        #def app():
        # Usernm = []


        if 'username' not in st.session_state:
            st.session_state.username = ''
        if 'useremail' not in st.session_state:
            st.session_state.useremail = ''

        def f():
            try:
                user = auth.get_user_by_email(email)
                print(user.uid)
                st.session_state.username = user.uid
                st.session_state.useremail = user.email

                global Usernm
                Usernm = (user.uid)

                st.session_state.signedout = True
                st.session_state.signout = True


            except:
                st.warning('Login Failed')

        def t():
            st.session_state.signout = False
            st.session_state.signedout = False
            st.session_state.username = ''


        if "signedout" not in st.session_state:
            st.session_state["signedout"] = False
        if 'signout' not in st.session_state:
            st.session_state['signout'] = False

        if not st.session_state["signedout"]:# only show if the state is False, hence the button has never been clicked
            st.title('Welcome to Project-Tracking')
            choice = st.selectbox('Login/Signup', ['Login', 'Sign up'])

            email = st.text_input('Email Address')
            password = st.text_input('Password', type='password')

            if choice == 'Sign up':
                username = st.text_input("Enter  your username")
                designation=st.text_input("Enter  your designation")

                if st.button('Create my account'):
                    user = auth.create_user(email=email, password=password, uid=username)

                    st.success('Account created successfully!')
                    st.markdown('Please Login using your email and password')
                    st.balloons()
            else:
                # st.button('Login', on_click=f)
                st.button('Login', on_click=f)

        if st.session_state.signout:

            if app == "Account":
                st.text('Welcome ' + st.session_state.username)

                st.text('Email id: ' + st.session_state.useremail)
                st.button('Sign out', on_click=t)

            if app == "Home":
                Homepage.app()

            if app == "Projects":
                Projects.app()

            if app == "Report":
                Report.app()

            def ap():
                st.write('Posts')








    app()

hide_st_style = """
            <style>
            MainMenu {visibility: hidden;}
            footer {visibility: hidden;}
            header {visibility: hidden;}
            </style>
            """
st.markdown(hide_st_style, unsafe_allow_html=True)
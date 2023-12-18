# import pickle
# from pathlib import Path
#
# import pandas as pd
# import plotly.express as px
# import streamlit as st
# import streamlit_authenticator as stauth
#
# def app():
#     # emojis: https://www.webfx.com/tools/emoji-cheat-sheet/
#     st.markdown("""___""")
#     st.title("User-Profile")
#
#     # --- USER AUTHENTICATION ---
#     names = ["Teju", "Shreya"]
#     usernames = ["TAB", "SRG"]
#
#     # load hashed passwords
#     file_path = Path(__file__).parent / "hashed_pw.pkl"
#     with file_path.open("rb") as file:
#         hashed_passwords = pickle.load(file)
#
#     authenticator = stauth.Authenticate(names, usernames, hashed_passwords,"sales_dashboard", "2002",cookie_expiry_days=30)
#
#     name, authentication_status, username = authenticator.login("Login", "main")
#     Manager = "Manager"
#     Employee = "Employee"
#     Designantion = st.multiselect("select the designantion:",[Manager,Employee])
#
#     if authentication_status == False:
#         st.error("Username/password is incorrect")
#
#     if authentication_status == None:
#         st.warning("Please enter your username and password")
#
#
#     if authentication_status:
#         # ---- READ EXCEL ----
#         st.header(f"Welcome {name}")
#         st.subheader(f"Designation: {Designantion}")
#         authenticator.logout("Logout", "main")
#
#     st.markdown("""___""")




import streamlit as st
import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from firebase_admin import auth

cred = credentials.Certificate("project-tracking-9c9b5-bf7842a47960.json")
#firebase_admin.initialize_app(cred)


def app():
    # Usernm = []
    st.title('Welcome to :violet[Pondering] :sunglasses:')

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

    if not st.session_state["signedout"]:  # only show if the state is False, hence the button has never been clicked
        choice = st.selectbox('Login/Signup', ['Login', 'Sign up'])
        email = st.text_input('Email Address')
        password = st.text_input('Password', type='password')

        if choice == 'Sign up':
            username = st.text_input("Enter  your unique username")

            if st.button('Create my account'):
                user = auth.create_user(email=email, password=password, uid=username)

                st.success('Account created successfully!')
                st.markdown('Please Login using your email and password')
                st.balloons()
        else:
            # st.button('Login', on_click=f)
            st.button('Login', on_click=f)

    if st.session_state.signout:
        st.write("Hiii")
        st.text('Name ' + st.session_state.username)
        st.text('Email id: ' + st.session_state.useremail)
        st.button('Sign out', on_click=t)

    def ap():
        st.write('Posts')
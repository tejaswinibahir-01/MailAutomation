import schedule
import time
import subprocess
import sys

def run_program():
    print("Running your program...")
    python_path = sys.executable
    subprocess.run([python_path, "C:/Users/tejas/PycharmProjects/BtechPr/PrApp/send_mail_2.py"])

# Schedule the job to run every Monday at 9 am
schedule.every().friday.at("15:00").do(run_program)

while True:
    schedule.run_pending()
    time.sleep(1)

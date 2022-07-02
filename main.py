import pyrebase


'''import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(11,GPIO.OUT)
servo1=GPIO.PWM(11,50)
servo1.start(0)'''


firebaseConfig = {
    "apiKey": "AIzaSyAN85KNgBXkM3mglfO7nPFN5U5Sy2tbV3M",
    "authDomain": "servo-web.firebaseapp.com",
    "databaseURL": "https://servo-web-default-rtdb.firebaseio.com",
    "projectId": "servo-web",
    "storageBucket": "servo-web.appspot.com",
    "messagingSenderId": "946745822389",
    "appId": "1:946745822389:web:7a978da251a023e35502fc"
  }
firebase=pyrebase.initialize_app(firebaseConfig)
db=firebase.database()


#reterive the data from the firebase
while True:
    #users=db.child('Servo_Motor_X_AXIS_Data').get()
    users = db.child('Servo_Motor_X_AXIS_Data').get()
    dict =users.val()
    dict_value=dict['x_axis']
    print(dict['x_axis'])
    #print(users.val())
    #users1=db.child('Servo_Motor_Y_AXIS_Data').get()
    #print(users1.val())

###########SERVO MOTOR CODE
'''import RPi.GPIO as GPIO
import time 
GPIO.setmode(GPIO.BOARD)
servo=11

GPIO.setup(servo,GPIO.OUT)
pwm=GPIO.PWM(servo,50)
pwm.start(6)

for i in range(0,180):
    dc =(1/20)*(i)*2
    pwm.changeDutyCycle(dc)
    time.sleep(1)
'''
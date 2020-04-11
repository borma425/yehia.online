# www.Yehia.Online
import socket

Py = socket.socket()        
host = '127.0.0.1'
port = 1212           
Py.bind((host, port))      
Op = open('YehiaOnline.txt','wb')
Py.listen(5)            
while True:
    Y, addr = Py.accept()
    print ('Got connection from', addr)
    print ("Receiving...")
    Rd = Y.recv(1024)
    while (Rd):
        print ("Receiving...")
        Op.write(Rd)
        Rd = Y.recv(1024)
    Op.close()
    print ("Done Receiving")
    Y.close()

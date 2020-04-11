import socket  

python = socket.socket()         
host = '127.0.0.1'
port = 1212
FileName = 'Yehia.txt'
python.connect((host, port))
MyFile = open(FileName,'rb')
print ('Sending' ,FileName,'...')
Yehia = MyFile.read(1024)
while (Yehia):
    print ('Sending' ,FileName,'...')
    python.send(Yehia)
    Yehia = MyFile.read(1024)
MyFile.close()
print ("has been sent" , FileName)
python.shutdown(socket.SHUT_WR)
print (python.recv(1024))
python.close()

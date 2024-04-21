from pytube import YouTube
from progress.bar import Bar, ChargingBar

yt = YouTube(input("Ingresa el url del video que desee descargar: "))
print("Procesando su video...")
bar = ChargingBar("Descargando", max = 100)
for num in range (100):
    stream = yt.streams.get_by_itag(22)
    stream.download()
    bar.next()
bar.finish()
print("Su video se ha descargado con exito")

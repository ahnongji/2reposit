import requests
import json

city = "Seoul"
apikey = "################################"
api = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}"

result = requests.get(api)
print(result.text)

data = json.loads(result.text)

# print(type(result.text))
# print(type(data))

print(data["name"],"의 날씨입니다.")
print("날씨는 ",data["weather"][0]["main"],"입니다.")
print("현재 온도는 ",data["main"]["temp"],"입니다.")
print("하지만 체감 온도는 ",data["main"]["feels_like"],"입니다.")
# 최저 기온 : main - temp_min
print("최저 기온은 ",data["main"]["temp_min"],"입니다.")
# 최고 기온 : main - temp_max

# 습도 : main - humidity

# 기압 : main - pressure

# 풍향 : wind - deg

# 풍속 : wind - speed
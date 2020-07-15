ESX = nil
  
Citizen.CreateThread(function()
  while ESX == nil do
    TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
    Citizen.Wait(0)
  end
end)



Citizen.CreateThread(function()
    --Citizen.Wait(0)
    function Draw3DText(x, y, z, text)
        local onScreen, _x, _y = World3dToScreen2d(x, y, z)
        local p = GetGameplayCamCoords()
        local distance = GetDistanceBetweenCoords(p.x, p.y, p.z, x, y, z, 1)
        local scale = (1 / distance) * 2
        local fov = (1 / GetGameplayCamFov()) * 100
        local scale = scale * fov
        if onScreen  then --and ESX.PlayerData.job.name ~= "police" 
            SetTextScale(0.35, 0.35)
            SetTextFont(4)
            SetTextProportional(1)
            SetTextColour(255, 255, 255, 215)
            SetTextEntry("STRING")
            SetTextCentre(1)
            AddTextComponentString(text)
            DrawText(_x,_y)
            local factor = (string.len(text)) / 370
            DrawRect(_x,_y+0.0125, 0.015+ factor, 0.03, 41, 11, 41, 68)
        end
    end
    while true do 
        Citizen.Wait(0)
        local coords = GetEntityCoords(PlayerPedId())
        for k,v in ipairs(Config.Banks) do
            if (GetDistanceBetweenCoords(coords, v.x, v.y, v.z, true) < 0.8) then --changed to 3.0    
                DrawMarker(v.Type, v.x, v.y, v.z, 0.0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 192, 29, 204, 100, false, false, 2, true, false, false, false)
                Draw3DText(v.x, v.y, v.z, "~g~[E]~s~ to open bank")
                if IsControlJustReleased(0, 38) and GetDistanceBetweenCoords(coords, v.x, v.y, v.z, true) < 0.8 then --and ESX.PlayerData.job.name ~= "police"  
                    TriggerServerEvent("banking:getBankAmount")
                end
            end
        end
    end
end)


Citizen.CreateThread(function()
    for k,v in pairs(Config.Banks) do
		local blip = AddBlipForCoord(v.x, v.y, v.x)

		SetBlipSprite (blip, 108)
		SetBlipScale  (blip, 0.7)
		SetBlipColour (blip, 77)
		SetBlipAsShortRange(blip, true)

		BeginTextCommandSetBlipName('STRING')
		AddTextComponentSubstringPlayerName("Bank")
		EndTextCommandSetBlipName(blip)
	end
end)





-- DEV COMMAND
RegisterCommand("react:show", function()
    TriggerServerEvent("banking:getBankAmount")
end)

RegisterNetEvent("banking:money")
AddEventHandler("banking:money", function(money, name)
    local _money = money
    local _name = name
    Bank = {
        {
            id = 1,
            name = _name,
            balance = _money,
        }, 
    }

    ESX.TriggerServerCallback('banking:get:transactions', function(transactions)
        SendNUIMessage({
            type = "RECIEVE_TRANSACTIONS",
            data = {
                transactions = transactions
            }
        })
    end)

    SendNUIMessage({
        type = "RECIEVE_BANK",
        data = {header = Bank}
    })

    SendNUIMessage(
        {
            type = "APP_SHOW"
        }
    )
    SetNuiFocus(true, true)

end)

-- DEPOSIT

RegisterNUICallback("depositAmount", function(data)
    print("AMOUNT")
    local depositAmount = data.value
    local depositDate = data.date
    print(depositAmount, depositDate)
    TriggerServerEvent("banking:deposit", depositAmount, depositDate)
    ESX.TriggerServerCallback('banking:get:transactions', function(transactions)
        SendNUIMessage({
            type = "RECIEVE_TRANSACTIONS",
            data = {
                transactions = transactions
            }
        })
    end)
end)

-- WITHDRAW

RegisterNUICallback("withdrawAmount", function(data)
    local withdrawAmount = data.value
    local withdrawDate = data.date
    print(withdrawAmount, withdrawDate)
    TriggerServerEvent("banking:withdraw", withdrawAmount, withdrawDate)
    ESX.TriggerServerCallback('banking:get:transactions', function(transactions)
        SendNUIMessage({
            type = "RECIEVE_TRANSACTIONS",
            data = {
                transactions = transactions
            }
        })
    end)
end)

-- TRANSFER

RegisterNUICallback("transferAmount", function(data)
    local transferAmount = data.value 
    local transferName = data.name
    local transferDate = data.date
    print(transferAmount, transferDate, transferName)
    TriggerServerEvent("banking:transfer", transferAmount, transferDate, transferName)
end)


-- ALERT


RegisterNetEvent("banking:send:alert")
AddEventHandler("banking:send:alert", function(method, messageStr)
    print(method, messageStr)
    SendNUIMessage({
        type = "SEND_ALERT",
        data = {
            alert = method,
            message = messageStr
        }
    })
end)


RegisterNUICallback("closeBank", function(data)
    SendNUIMessage(
        {
            type = "APP_HIDE"
        }
    )
    SetNuiFocus(false, false)
end)


--DEV COMMAND
RegisterCommand("react:hide", function()
    SendNUIMessage(
        {
            type = "APP_HIDE"
        }
    )
    SetNuiFocus(false, false)
end)
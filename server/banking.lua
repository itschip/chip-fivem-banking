ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) 
    ESX = obj 
end)

RegisterServerEvent("banking:getBankAmount")
AddEventHandler("banking:getBankAmount", function()
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local money = xPlayer.getAccount('bank').money
    local name = xPlayer.getName()
    print("BANKSHIT")
    TriggerClientEvent("banking:money", source, money, name)
end)  

RegisterServerEvent("banking:deposit")
AddEventHandler("banking:deposit", function(depositAmount, depositDate)
    local _depositAmount = tonumber(depositAmount)
    print(_depositAmount)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local _identifier = xPlayer.getIdentifier()
    if _depositAmount == nil or _depositAmount <= 0 or _depositAmount > xPlayer.getMoney() then
        TriggerClientEvent("banking:send:alert", -1, "error", "Invalid deposit")
    else
        xPlayer.removeMoney(_depositAmount)
        xPlayer.addAccountMoney("bank", _depositAmount)
        TriggerClientEvent("banking:send:alert", -1, "success", "Deposit was successful")
        MySQL.Async.execute("INSERT INTO transactions (`identifier`, `type`, `amount`, `date`) VALUES (@identifier, @type, @amount, @date);", 
            {
                identifier = _identifier,
                type = "Deposit",
                amount = _depositAmount,
                date = depositDate

            }, function()
        end)
    end
end)


RegisterServerEvent("banking:withdraw")
AddEventHandler("banking:withdraw", function(withdrawAmount, withdrawDate)
    local _withdrawAmount = tonumber(withdrawAmount)
    print(_withdrawAmount)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local _identifier = xPlayer.getIdentifier()
    base = xPlayer.getAccount('bank').money
    if _withdrawAmount == nil or _withdrawAmount <= 0 or _withdrawAmount > base then
        TriggerClientEvent("banking:send:alert", -1, "error", "Invalid withdraw")
    else
        xPlayer.addMoney(_withdrawAmount)
        xPlayer.removeAccountMoney('bank', _withdrawAmount)
        TriggerClientEvent("banking:send:alert", -1, "success", "Withdraw was successful")
        MySQL.Async.execute("INSERT INTO transactions (`identifier`, `type`, `amount`, `date`) VALUES (@identifier, @type, @amount, @date);", 
            {
                identifier = _identifier,
                type = "Withdraw",
                amount = _withdrawAmount,
                date = withdrawDate
            
            }, function()
        end)
    end
end)

RegisterServerEvent("banking:transfer")
AddEventHandler("banking:transfer", function(transferAmount, transferDate, transferName)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local _identifier = xPlayer.getIdentifier()
    local target = ESX.GetPlayerFromId(transferName)
    if (target == nil or target == -1) then
        print("This is not a valid name")
        TriggerClientEvent("banking:send:alert", _source, "error", "The ID is invalid")
    else
        balance = xPlayer.getAccount('bank').money
        tbalance = target.getAccount('bank').money

        if tonumber(_source) == tonumber(transferName) then
            TriggerClientEvent("banking:send:alert", _source, "error", "You cannot transfer money to yourself.")
        else
            if balance <= 0 or balance < tonumber(transferAmount) or tonumber(transferAmount) <= 0 then
                TriggerClientEvent("banking:send:alert", _source, "error", "You dont have enough money in the bank.")
            else
                xPlayer.removeAccountMoney('bank', tonumber(transferAmount))
                target.addAccountMoney('bank', tonumber(transferAmount))
                local targetName = target.getName();
                TriggerClientEvent("banking:send:alert", _source, "success", "Transfer successful to " .. targetName .. "")
                MySQL.Async.execute("INSERT INTO transactions (`identifier`, `type`, `amount`, `date`) VALUES (@identifier, @type, @amount, @date);", 
                    {
                        identifier = _identifier,
                        type = "Transfer to " .. targetName .. "",
                        amount = transferAmount,
                        date = transferDate
            
                    }, function()
                end)
            end
        end
    end
    print(transferAmount, transferDate, transferName)
end)

ESX.RegisterServerCallback('banking:get:transactions', function(source, cb)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local _identifier = xPlayer.getIdentifier()

    MySQL.Async.fetchAll("SELECT * FROM transactions WHERE identifier = @identifier ORDER BY id DESC" , 
        {
            ['@identifier'] = _identifier 
        }, function(transactions)
        cb(transactions)
    end)
end)

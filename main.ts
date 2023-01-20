makerbit.onIrDatagram(function () {
    IRDatagram = convertToText(makerbit.irDatagram())
    if (IRDatagram == "0x00FFA25D") {
        IRValue = "1"
    } else if (IRDatagram == "0x00FF629D") {
        IRValue = "2"
    } else if (IRDatagram == "0x00FFE21D") {
        IRValue = "3"
    } else if (IRDatagram == "0x00FF22DD") {
        IRValue = "4"
    } else if (IRDatagram == "0x00FF02FD") {
        IRValue = "5"
    } else if (IRDatagram == "0x00FFC23D") {
        IRValue = "6"
    } else if (IRDatagram == "0x00FFE01F") {
        IRValue = "7"
    } else if (IRDatagram == "0x00FFA857") {
        IRValue = "8"
    } else if (IRDatagram == "0x00FF906F") {
        IRValue = "9"
    } else if (IRDatagram == "0x00FF9867") {
        IRValue = "0"
    } else if (IRDatagram == "0x00FF6897") {
        IRValue = "*"
    } else if (IRDatagram == "0x00FFB04F") {
        IRValue = "#"
    } else if (IRDatagram == "0x00FF18E7") {
        IRValue = "U"
    } else if (IRDatagram == "0x00FF10EF") {
        IRValue = "L"
    } else if (IRDatagram == "0x00FF5AA5") {
        IRValue = "R"
    } else if (IRDatagram == "0x00FF4AB5") {
        IRValue = "D"
    } else if (IRDatagram == "0x00FF38C7") {
        IRValue = "OK"
    } else {
        IRValue = "?"
    }
    kitronik_VIEW128x64.clear()
    kitronik_VIEW128x64.show(IRDatagram, 1, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
    basic.showString(IRValue)
})
let IRDatagram = ""
let IRValue = ""
basic.showIcon(IconNames.SmallHeart)
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
IRValue = ""
kitronik_VIEW128x64.clear()

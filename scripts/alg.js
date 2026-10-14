function exchangeMoney() {
    const amountInput = document.getElementById('amount').value;
    const resultDiv = document.getElementById('result');
    let amount = parseInt(amountInput, 10);
    
    if (isNaN(amount) || amount < 0) {
        resultDiv.innerHTML = "<span style='color: red;'>Пожалуйста, введите корректное положительное число.</span>";
        return;
    }
    
    if (amount % 2 !== 0) {
        resultDiv.innerHTML = "<span style='color: red;'>Размен невозможен: сумма должна быть четной, так как минимальная монета = 2 руб.</span>";
        return;
    }
    
    let originalAmount = amount;
    
    const k500 = Math.floor(amount / 500);
    amount %= 500;
    
    const k100 = Math.floor(amount / 100);
    amount %= 100;
    
    const k10 = Math.floor(amount / 10);
    amount %= 10;
    
    const m2 = Math.floor(amount / 2);
    amount %= 2;
    
    let output = `Сумма ${originalAmount} руб. успешно разменена:\n\n`;
    output += `Купюры 500 руб.: ${k500} шт.\n`;
    output += `Купюры 100 руб.: ${k100} шт.\n`;
    output += `Купюры 10 руб.: ${k10} шт.\n`;
    output += `Монеты 2 руб.: ${m2} шт.`;
    
    resultDiv.innerHTML = `<span style='color: green;'>${output}</span>`;
}
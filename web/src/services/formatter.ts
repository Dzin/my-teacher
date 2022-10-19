export const formatter = {
    monetaryValue(value: number): string {
        return value.toLocaleString(
            'pt-BR',
            {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            }
        )
    },

    limitText(text: string, maxSize: number): string {
        if (text.length < maxSize) {
            return text
        } else {
            return `${text.slice(0, maxSize)}...`
        }
    }
}
#include <stdio.h>

int main(void)
{
    float x, y;
    int exists = 0;

    printf("Введіть значення x: ");
    if (scanf("%f", &x) != 1)
    {
        printf("Помилка введення.\n");
        return 1;
    }

    if (x > -10)
    {
        if (x <= -5)
        {
            y = x * x * x - 6;
            exists = 1;
        }
        else
        {
            if (x > 5)
            {
                if (x <= 15)
                {
                    y = x * x * x - 6;
                    exists = 1;
                }
                else
                {
                    if (x >= 25)
                    {
                        y = 2 * x * x * x - 3 * x + 2;
                        exists = 1;
                    }
                }
            }
        }
    }

    if (exists == 1)
    {
        printf("y = %f\n", y);
    }
    else if (x <= -10)
    {
        printf("Помилка: функція не існує для x = %.2f\n", x);
        printf("Причина: значення x <= -10 (знаходиться лівіше від інтервалу (-10, -5]).\n");
    }
    else if (x <= 5)
    {
        printf("Помилка: функція не існує для x = %.2f\n", x);
        printf("Причина: значення x потрапляє у проміжок (-5, 5] між інтервалами (-10, -5] та (5, 15].\n");
    }
    else if (x < 25)
    {
        printf("Помилка: функція не існує для x = %.2f\n", x);
        printf("Причина: значення x потрапляє у проміжок (15, 25) між інтервалами (5, 15] та [25, +inf).\n");
    }

    return 0;
}
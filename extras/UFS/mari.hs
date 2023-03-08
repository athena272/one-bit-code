atividade num 
    | num == 0 = 1 
    | otherwise = atividade(num - 1) - 2 

mdc x y 
  | x `mod` y == 0 = y
  | otherwise = mdc y (x `mod` y)

calcExpoente :: Int -> Int -> Int
calcExpoente x y 
  | y == 0 = 1
  | otherwise = x * calcExpoente x (y - 1) 

multiplicacao x y 
   | y == 0 = 0 
   | otherwise = x + x * (y - 1)
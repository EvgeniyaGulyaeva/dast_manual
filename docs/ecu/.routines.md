---
sidebar_position: 6
---

# Рутины

ECU contain mandatory Routines (they are the same for each ECU where Routine Control is applicable)
| DID | DID name | Comment |
| --- | -------- | ------- |
| 0203	| CheckProgrammingPreCondition	| <ol><li>Mandatory for ECUs with flash functionality</li><ul><li>Vehicle speed is not standing (vehicle speed is more than 3km/h)(01)</li><li>System is in HVStatus(02)</li><li>System voltage Low(03)</li><li>Current Gear is not P gear(04)</li><li>Vehicle is in charging state(05)</li></ul><li>If reprogramming fails, you need to support the RID in the BOOT to ensure that the reprogramming can be performed again</li></ol> |
| FF00 | Erase Memory | Mandatory for ECUs with flash functionality |
| 0202 | Check Memory | Mandatory for ECUs with flash functionality |
| FF01 | CheckProgrammingDependencies | Mandatory for ECUs with flash functionality |
| 0102| CheckCodingState | Mandatory for ECUs which support CDS DID$F108 |
